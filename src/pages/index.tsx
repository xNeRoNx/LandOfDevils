// pages/index.tsx
import React, {useState} from 'react';
import Button from '@/components/Button';
import Loading from '@/pages/loading';

const Home: React.FC = () => {
	const [loading, setLoading] = useState('false');
	return (<>
		<Loading />
		<Button text={loading} onClick={()=> setLoading('ok')} style='bg-red-500'/>
		<Button text='O2' onClick={()=> setLoading('false')}/>
	</>);
};

export default Home;
