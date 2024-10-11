// App imports
import './styles.scss';

const files = ['Hello', 'this', 'are', 'the', 'folders', 'yey']

export const Container = () => {
	return (
		<div className="subToolsContainer">
			{
				files.map((file: string, index: number) => {
					return (
						<div key={index} style={{display: "grid", justifyItems: "center", alignItems: "center"}}>
							<img 
								src={process.env.PUBLIC_URL + "/static/logos/icon.svg"} 
								alt="logo-computational-designer" 
								width="50%" 

							/>
						</div>
					)
				})
			}
		</div>
	)
}

Container.displayName="Container";