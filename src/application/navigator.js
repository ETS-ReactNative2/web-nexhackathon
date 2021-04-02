import history from "./history";

export function navigator( routeName ) {
  history.push('/' + routeName)
}