import React from 'react';

const FollowUs = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement; // Read the form data
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData }); // You can pass formData as a fetch body directly:
    const formJson = Object.fromEntries(formData.entries()); // Or you can work with it as a plain object:
    console.log(formJson);
  }
  return (
    <div className="form_container">
      <form className="subscribe_form" method="post" onSubmit={handleSubmit}>
        Не пропусти новые приключения!
        <label className="subscribe_inputs">
          <input name="mailInput" placeholder="e-mail" />
          <input name="nameInput" placeholder="Как к Вам обращаться" />
        </label>
        <label>
          <input type="checkbox" name="myCheckbox" defaultChecked={true} /> Я согласен на обработку персональных данных
        </label>
        <button className="subscribe_btn" type="submit">
          Подписаться на впечатления
        </button>
      </form>
    </div>
  );
};

export default FollowUs;
