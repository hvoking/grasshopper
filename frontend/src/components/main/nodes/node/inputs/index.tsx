// App imports
import './styles.scss';

export const Inputs = ({nodeItem}: any) => {
	return (
		<div className="node-inputs">
			{nodeItem.inputs && nodeItem.inputs.map((item: any, index: number) => {
				return (
					<div key={index} className="input-item">
						<span className="before"></span>{item}
					</div>
				)
			})}
		</div>
	)
}

Inputs.displayName="Inputs";