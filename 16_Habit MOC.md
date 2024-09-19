---
aliases:
  - Habit MOC
created: 2024-06-29
isoCreated: 2024-06-29T15:56:12.409+08:00
ordinal: 0
tags:
  - map
---
up: [[00_Home MOC|Home MOC]]


```dataviewjs
function computeStreak(dates) {

	if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 }; // Sort dates in ascending order

	  
	dates.sort((a, b) => new Date(a) - new Date(b));

	  
	let currentStreak = 1;
	
	  
	
	let longestStreak = 1;
	
	  
	
	let streak = 1;
	
	  
	
	for (let i = 1; i < dates.length; i++) {
		
		const prevDate = moment(dates[i - 1]);
		
		  
		
		const currDate = moment(dates[i]);
		
		
		const diffDays = currDate.diff(prevDate, 'days');
		

		
		if (diffDays === 1) {
		
			streak++;
		
		} else {
		
			streak = 1;
		
		}

				
		if (streak > longestStreak) {
		
			longestStreak = streak;
		
		}
	
	} // Check if the last streak is the current streak
	
	  
	
	const today = new Date();
	
	  
	
	const lastDate = new Date(dates[dates.length - 1]);
	
	  
	
	const diffTime = Math.abs(today - lastDate);
	
	  
	
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	
	  
	
	if (diffDays === 1) {
	
		currentStreak = streak;
	
	} else {
	
		currentStreak = diffDays === 0 ? streak : 0;
	
	}
	
	  
	
	return { currentStreak, longestStreak };

}

  

const habitNames = 
	dv.pages("#habit")
	.filter((p) => !p.tags.includes("status/backlog") && !p.tags.includes("deleted"))
	.sort((p) => p.file.name, "asc")
		.file
		.name.values;

const pages = dv.pages("#log/journal").sort((p) => p.file.ctime, "desc");

const habits = {};

const sectionName = "Habits";

// Initialize habit data

  

habitNames.forEach((habit) => {

	habits[habit] = { dates: [] };

});

  

pages.forEach((page) => {

	console.log(page.file.ctime.toString())
	const habitTasks = page.file.tasks.filter((x) =>

		x.header.subpath.includes(sectionName)

	);


	habitTasks.forEach((habit) => {
	
		const habitName = habit.text.replaceAll("[[", "").replaceAll("]]", "");
		
		const completed = habit.completed;
		
		if (!habitNames.includes(habitName)) {
		
			return;
		
		}

		if (completed) {
		
			habits[habitName].dates.push(new Date(page.created.toISO()));
		
		}
	
	});

});

  

// Display the streaks for each habit

  

const habitData = habitNames.map((habitName) => {
	const habit = habits[habitName]
	const { currentStreak, longestStreak } = 
		computeStreak(habit.dates);

	return {
	
		habit: habitName,
		
		currentStreak,
		
		longestStreak
	
	};

});

habitData.sort((a, b) => b.longestStreak - a.longestStreak)

dv.table(
	
	["Habit", "Current Streak", "Longest Streak"],
	
	habitData.map(h => [
		`[[${h.habit}]]`, 
		h.currentStreak, 
		h.longestStreak
	])

);
```




# Related


<br />
<br />







