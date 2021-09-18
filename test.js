const person = {
	name: "John Doe",
	children: [
		{
			name: "Zoe",
			children: [
				{ name: "Kyle", children: [] },
				{ name: "Mary", children: [] },
			],
		},
		{
			name: "Bob",
			children: [
				{ name: "Ron B", children: [{ name: "Lone R", children: [] }] },
			],
		},
	],
};

const findChildren = (tree) => {
	if (tree.children.length === 0) {
		return;
	}
	tree.children.forEach((child) => {
		console.log(child.name);
		findChildren(child);
	});
};

findChildren(person);
