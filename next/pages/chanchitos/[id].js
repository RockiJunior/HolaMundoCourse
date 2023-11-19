import useIsMounted from '@/hooks/isMounted';

const ChanchitoDinamico = () => {
	const { loaded, id } = useIsMounted();

	return <div>{loaded ? <p>{`Chanchito ${id}`}</p> : null}</div>;
};

export default ChanchitoDinamico;
