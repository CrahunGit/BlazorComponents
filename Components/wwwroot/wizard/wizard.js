export function refreshAnimation(wizardId, index) {
    const wizard = document.getElementById(wizardId);

    const total_steps = document.querySelectorAll(`#${wizardId} .nav-item`).length;
    let move_distance = wizard.offsetWidth / total_steps;
    let height = document.querySelector(`#${wizardId} .nav-item`).offsetHeight + 5;
    let text = document.querySelectorAll(`#${wizardId} .nav-item`)[index].textContent;
    let index_temp = index;
    let vertical_level = 0;
    let li_width = 100 / total_steps;

    const mobile_device = document.body.clientWidth < 600 && total_steps > 3;

    if(mobile_device){
        move_distance = wizard.offsetWidth / 2;
        index_temp = index % 2;
        li_width = 50;
    }

    //size steps
    document.querySelectorAll(`#${wizardId} .nav li`).forEach(element => {
        element.style.width = li_width + '%';
    });

    const step_width = move_distance;
    move_distance = move_distance * index_temp;

    let current = index + 1;

    if(current == 1 || (mobile_device == true && (index % 2 == 0) )){
        move_distance -= 8;
    } else if(current == total_steps || (mobile_device == true && (index % 2 == 1))){
        move_distance += 8;
    }

    if(mobile_device){
        vertical_level = parseInt(index / 2);
        vertical_level = vertical_level * 38;
    }

    document.querySelector(`#${wizardId} .moving-tab`).style.width = step_width + 'px';
    document.querySelector(`#${wizardId} .moving-tab`).style.height = height + 'px';
    document.querySelector(`#${wizardId} .moving-tab`).style.transform = 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)';
    document.querySelector(`#${wizardId} .moving-tab`).style.transition = 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)';
    document.querySelector(`#${wizardId} .moving-tab`).textContent = text;
}
