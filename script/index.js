const discoverDiv = document.getElementById('discover-div');

discoverDiv.addEventListener('click', function(){
    window.location.href = "./blog.html";
})


//generating random bg-color
document.getElementById('change-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 1; i <= 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// showing update date
const date = new Date();
document.getElementById('update-date').innerText = date.toDateString();


// complete btn logic

const completeButton1 = document.getElementById('btn-1');

completeButton1.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn1 = document.getElementById('btn-1');
            disabledBtn1.style.opacity = "0.3"
            disabledBtn1.style.backgroundColor = "bg-indigo-500";
            disabledBtn1.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('fix-mobile-heading');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
const completeButton2 = document.getElementById('btn-2');

completeButton2.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn2 = document.getElementById('btn-2');
            disabledBtn2.style.opacity = "0.3"
            disabledBtn2.style.backgroundColor = "bg-indigo-500";
            disabledBtn2.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('dark-mode');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
const completeButton3 = document.getElementById('btn-3');

completeButton3.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn3 = document.getElementById('btn-3');
            disabledBtn3.style.opacity = "0.3"
            disabledBtn3.style.backgroundColor = "bg-indigo-500";
            disabledBtn3.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('Optimize-page');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
const completeButton4 = document.getElementById('btn-4');

completeButton4.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn4 = document.getElementById('btn-4');
            disabledBtn4.style.opacity = "0.3"
            disabledBtn4.style.backgroundColor = "bg-indigo-500";
            disabledBtn4.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('add-emoji');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
const completeButton5 = document.getElementById('btn-5');

completeButton5.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn5 = document.getElementById('btn-5');
            disabledBtn5.style.opacity = "0.3"
            disabledBtn5.style.backgroundColor = "bg-indigo-500";
            disabledBtn5.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('OpenAI');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
const completeButton6 = document.getElementById('btn-6');

completeButton6.addEventListener('click', function(){
        alert("Board updated successfully");
        let taskCount = document.getElementById('task-count');
        let taskCountValue = parseInt(taskCount.innerText);
        let taskCountMinus = taskCountValue - 1;
        taskCount.innerText = taskCountMinus;

        let navCount = document.getElementById('nav-count');
        let navCountValue = parseInt(navCount.innerText);
        let navCountPlus = navCountValue + 1;
        navCount.innerText = navCountPlus;

        const disabledBtn6 = document.getElementById('btn-6');
            disabledBtn6.style.opacity = "0.3"
            disabledBtn6.style.backgroundColor = "bg-indigo-500";
            disabledBtn6.style.pointerEvents = 'none';

        if(navCountPlus > 28){
            alert('Congratulation!! You have completed all the task.')
        }

        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleTimeString({
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let task = document.getElementById('Improve-job');
        let taskHeading = task.innerText;
        let activityLog = document.getElementById('activity-log');
        let newPara = document.createElement('p');
        newPara.classList.add(
            'p-4',
            'bg-[#f4f7ff]',
            'shadow-md',
            'mt-2',
            'text-gray-600',
            'rounded-md',
            'mx-2',
        )
        newPara.innerText = `You have completed the task ${taskHeading} at ${formattedTime}`;
        activityLog.appendChild(newPara);

        document.getElementById('clear-history').addEventListener('click', function(){
            newPara.innerHTML = "";
        })
        
    })
