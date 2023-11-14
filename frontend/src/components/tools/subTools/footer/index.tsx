import { useSearch } from '../../../main/context/SearchContext'
import { useState } from 'react';
import { SubToolsList } from './list';

interface SubToolsFooterType {
	folder: string; 
}

export const SubToolsFooter = ({folder}: SubToolsFooterType) => {
	const [subToolsList, subToolsListSet] = useState<boolean>(false)
	const [delay, delaySet] = useState<any>(null)
	const {allItemsSet} = useSearch()

	const onMouseEnter = () => {
		fetchFolder();
		delaySet(setTimeout(() => subToolsListSet(true), 200))
	}

	const onMouseLeave = () => {
		clearTimeout(delay);
		subToolsListSet(false);
	}

	const fetchFolder = () => {
		fetch(`http://localhost:8000/folders/${folder}`)
		.then(res => res.json())
		.then(data => {
			allItemsSet(data[folder]);
		})
	}

	return (
		<div onMouseLeave={onMouseLeave} className="subToolsFooterWrapper">
			<div onMouseEnter={onMouseEnter} className="subToolsFooter">
				<div>
					{folder}
				</div>
				<span>&darr;</span>
			</div>
			{subToolsList && 
				<SubToolsList />
			}
		</div>
	)
}

SubToolsFooter.displayName="SubToolsFooter";