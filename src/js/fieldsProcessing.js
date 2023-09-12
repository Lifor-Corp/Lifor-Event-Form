function addDateField() {
    const block = document.querySelector("#date-block");
    const button = document.querySelector("#add-date");
    button.remove();
    block.querySelector(".date-block").classList.add("date-start");
    block.querySelector(".date-start").classList.remove("date-block");
    
    const dateEnd = document.createElement("input");
    dateEnd.type = "date";
    dateEnd.id = "date-end";
    dateEnd.name = "date-end";
    dateEnd.classList.add("bg-slate-100", "rounded", "block", "w-full", "mt-1", "date-end");
    
    // adding same value to date-end as it was in date-start
    dateEnd.value = document.getElementById("date-start").value;

    block.appendChild(dateEnd);
}

document.querySelector("#add-date").addEventListener("click", addDateField);