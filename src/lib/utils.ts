import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getPathSegments(pathname: string): { name: string; path: string }[] {
	const segments = pathname.split('/').filter(segment => segment !== '');

	let path = '';
	const result = segments.map(segment => {
		path += "/" + segment;
		return { name: segment, path };
	});

	return [{ name: 'home', path: '/' }, ...result];
}

export function generateTimesUntilMidnight() {
  const currentTime = new Date();
  const midnight = new Date();
  midnight.setHours(23, 59, 59, 999);

  const times = [];
  let currentTimeCopy = new Date(currentTime);

  currentTimeCopy.setMilliseconds(0);
  currentTimeCopy.setSeconds(0);
  currentTimeCopy.setMinutes(currentTimeCopy.getMinutes() + (30 - (currentTimeCopy.getMinutes() % 30)));

  while (currentTimeCopy <= midnight) {
    const timeString = currentTimeCopy.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    times.push(timeString);
    currentTimeCopy.setMinutes(currentTimeCopy.getMinutes() + 30);
  }

  return times;
}
