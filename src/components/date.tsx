import { format, parseISO } from 'date-fns'

export function Date({ dateString }: { dateString: string }) {
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
