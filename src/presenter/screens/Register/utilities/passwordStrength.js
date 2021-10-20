import * as passwordStrengthCalc from 'zxcvbn'

function getUserDatasForPasswordChecker(formik) {
    const userDatas = []
    const birthDateArray = formik.values.birthDate.split('-')
    const nameArray = formik.values.name.split(' ')

    birthDateArray.forEach((data) => {
        if(data != undefined) {
            userDatas.push(data
                )
        }
    })

    nameArray.forEach((data) => {
        if(data != undefined) {
            userDatas.push(data
                )
        }
    })

    return userDatas
}

function passwordStrength(e, setUseState, formik) {
    const password = e.target.value
    let passwordHandled
    let regex
    let regexStr
    let result
    const strengthDescription = ['Muito fraca', 'Fraca', 'Aceitável', 'Forte', 'Muito forte']
    const userDatas = getUserDatasForPasswordChecker(formik)

    userDatas.forEach((data) => {
        if(data != '') {
            regexStr += data
            regexStr += '|'
        }
    })
    
    if(regexStr != undefined) {
        regex = new RegExp(regexStr.slice(9, -1), 'gi')
    }
    
    if(password != '') {
        passwordHandled = password.replace(regex, '0')
        console.log(passwordStrengthCalc(passwordHandled), userDatas)
        result = passwordStrengthCalc(passwordHandled).score
        result += 1
        setUseState({
            strength: result.toString(),
            status: strengthDescription[result - 1]
        })
    }else {
        setUseState({
            strength: '0',
            status: ''
        })
    }

    return e
}

export {passwordStrength}
