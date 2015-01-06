if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introducing Telescope",
		url: "http://google.com"
	});
	Posts.insert({
		title: "Meteor",
		url: "http://meteor.com"
	});
	Posts.insert({
		title: "The Pancake Book",
		url: "http://themeteorbook.com"
	});
}