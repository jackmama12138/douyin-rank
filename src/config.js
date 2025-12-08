const {
  AID,
  ANCHOR_ID,
  ROOM_ID,
  MS_TOKEN = 'IasWn6BggYG6fkoLIudOG3ZbiLgwlo-F5VBqVersnWwSH0t_ThW8ybY_l5dCbfaIz5k-5-TTySIayzffZucpIPognoJ-fBQDatxXbaVD31ARgYeBo-hKqHeupuiA2w%3D%3D',
  A_BOGUS = 'mXRh%2FRwhdiDp6Dyk5vOLfY3q63a3Yh4S0tLV%2FD2ffnfpvy39HMY49exLdXvvNGfjLG%2FlIeYjy4hJYNMMxQCJA3vRHuDKUIcpmDSkKl5Q5xSSs1Xce6UgrUkq-hsACFrQsv1lxOfkw75rSYmmAxAJ5kIlO62-zo0%2F9-j%3D'
} = Object.assign({
  AID: '6383',
  ANCHOR_ID: '1706895689395140',
  ROOM_ID: '7422072931515206451'
}, process.env)
const signature = MS_TOKEN && A_BOGUS ? `&msToken=${MS_TOKEN}&a_bogus=${A_BOGUS}` : ''
const list = [
  {
    type: 'popularity',
    url: `https://live.douyin.com/webcast/ranklist/popularity/?aid=${AID}&anchor_id=${ANCHOR_ID}&room_id=${ROOM_ID}${signature}`
  },
  // {
  //   type: 'hour',
  //   url: `https://live.douyin.com/webcast/ranklist/hour_detail/?aid=${AID}&anchor_id=${ANCHOR_ID}&room_id=${ROOM_ID}${signature}&ranklist_type=0`
  // },
  // {
  //   type: 'hour-new',
  //   url: `https://live.douyin.com/webcast/ranklist/hour_detail/?aid=${AID}&anchor_id=${ANCHOR_ID}&room_id=${ROOM_ID}${signature}&ranklist_type=6`
  // },
  {
    type: "hot-search",
    url: `https://creator.douyin.com/janus/douyin/creator/data/billboard/list?aid=2906&page_num=1&page_size=200&type=1`
  },
  {
    type: 'creator-top',
    url: `https://creator.douyin.com/janus/douyin/creator/data/billboard/list?aid=2906&page_num=1&page_size=200&type=10`
  }
]

Object.assign(module.exports,
  Object.assign(exports, {
    list
  })
)
