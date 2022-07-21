import {Composition} from 'remotion';
import Main from './Main';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={30 * 17}
				fps={30}
				width={540}
				height={960}
			/>
		</>
	);
};
