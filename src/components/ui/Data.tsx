// component that shows data using json.stringify(data, null, 2) with syntax highlighting
export function Data({ data }: { data: any }) {
	return (
		<div className="dark:bg-gray-900 container max-w-7xl mx-auto max-h-80 overflow-y-scroll">
			<pre>
				<code>
					<div className="text-sm monolisa">
						{JSON.stringify(data, null, 2)}
					</div>
				</code>
			</pre>
		</div>
	)
}
