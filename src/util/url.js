export const httpToHttps = ({protocol, replace, href, hostname}) => {
  if (protocol === 'http:' && hostname !== 'localhost') {
    const redirect = href.replace(/http:/, 'https:')
    replace(redirect)
  }
}
