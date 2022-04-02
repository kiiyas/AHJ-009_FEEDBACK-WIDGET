export default class FeedbackPopup {
  constructor(container) {
    this.container = container || document.body;
    this.feedbackDot = document.querySelector('.feedback-container');
    this.feedbackForm = null;
  }

  start() {
    document.addEventListener('click', (e) => {
      if (e.target === this.feedbackDot) {
        e.preventDefault();
        this.toggleStatus(this.feedbackDot, 'hidden');
        this.createPopup();
        this.feedbackForm = document.querySelector('.feedback-form-container');
        const close = document.querySelector('.feedback-form-header > a');
        close.addEventListener('click', (evt) => {
          evt.preventDefault();
          this.feedbackForm.remove();
          this.toggleStatus(this.feedbackDot, 'hidden');
        });
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  toggleStatus(element, status) {
    element.classList.toggle(status);
  }

  // eslint-disable-next-line class-methods-use-this
  createPopup() {
    const form = document.createElement('div');
    form.classList.add('feedback-form-container');
    form.innerHTML = `<div class="feedback-form-header">      
      <h3>Напишите нам!</h3>
      <a href="#">+</a>
    </div>
    <form action="#" method="post" class="feedback-form">
      <textarea name="" rows="10"></textarea>
      <input type="submit" value="Отправить">
    </form>`;
    this.container.appendChild(form);
  }
}
