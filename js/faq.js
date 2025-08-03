
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const questionButton = item.querySelector(".faq-question");
    const answerDiv = item.querySelector(".faq-answer");

    questionButton.addEventListener("click", function() {
        const isExpanded = answerDiv.style.maxHeight;

        // Collapse all open answers
        faqItems.forEach(faq => {
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

        // Expand the clicked one if it was not expanded
        if (!isExpanded) {
            answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
        }
    });
});
