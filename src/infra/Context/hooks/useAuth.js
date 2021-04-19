import { useState, useEffect, useCallback } from 'react'

import api from '../../services/http'
import history from '../../../application/history'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {}
  })

  useEffect(() => {
    const { token, user } = data

    if (token && user) {
      setAuthenticated(true)
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, [data])
  
  const handleLogin = useCallback( async(values) => {
    const response = await api.post('/sessions', values)

    const { user, token } = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user })

    history.push('/home')
  }, [])

  const handleLogout = useCallback( async() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = ""

    setData({});

    history.push('/login')
  }, [])

  return { data, authenticated, loading, handleLogin, handleLogout }
}