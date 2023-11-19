// App imports
import { Header } from './header';
import { ExtraTools } from './extra';
import { TextTools } from './text';
import { Tabs } from './tabs';

export const Wrapper = ({ children }: any) => {
	return (
		<>
			<Header/>
			<TextTools/>
			<Tabs/>
			{children}
			<ExtraTools/>
		</>
	)
}