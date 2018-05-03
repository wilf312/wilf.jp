export const httpToHttps = ({protocol, replace, href, hostname}) => {
  if (protocol === 'http:' && hostname !== 'localhost') {
    const url = href.replace(/http:/, 'https:')
    replace(url)
  }
}
