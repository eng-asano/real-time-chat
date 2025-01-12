import moment from 'moment'
import 'moment/locale/ja'

/** ISO8601の日付、時刻を変換 */
export function formatISO8601(isoDate: string) {
  moment.locale('en')

  const today = moment().startOf('day')
  const targetDate = moment(isoDate).startOf('day')

  if (targetDate.isSame(today, 'day')) {
    return 'Today'
  } else if (targetDate.isSame(today.clone().subtract(1, 'day'), 'day')) {
    return 'Yesterday'
  } else {
    return targetDate.format('M/D')
  }
}
