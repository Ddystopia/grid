import axios from 'axios'
const uriForSmallPart =
  'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const uriForLargePart =
  'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

export const getSmall = async () => axios.get(uriForSmallPart).then(r => r.data)

export const getLarge = async () => axios.get(uriForLargePart).then(r => r.data)
