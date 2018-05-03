export const httpToHttps = (loc = location) => {
  const {protocol, href, hostname} = loc
  if (protocol === 'http:' && hostname !== 'localhost') {
    const redirect = href.replace(/http:/, 'https:')
    loc.replace(redirect)
  }
}
