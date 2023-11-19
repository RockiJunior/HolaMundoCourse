import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useIsMounted = () => {
	const [loaded, setLoaded] = useState(false);
	const {
		isReady,
		query: { id },
	} = useRouter();

	useEffect(() => {
		if (isReady) setLoaded(true);
	}, [isReady]);

	return { loaded, id };
};

export default useIsMounted;
