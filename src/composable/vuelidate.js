import { computed } from 'vue'
import { email, required, helpers, minLength, sameAs } from '@vuelidate/validators'

export const rules = computed(() => {
    return {
    name: {required: helpers.withMessage('Обязательное поле', required), minLength: helpers.withMessage('Введите более 1-ой буквы' , minLength(2))},
    phone: {required: helpers.withMessage('Обязательное поле', required), minLength: helpers.withMessage('Неверный формат номера', minLength(18))}, 
    email: {email: helpers.withMessage('Некорректный email', email)},
    question: {required: helpers.withMessage('Обязательное поле', required), minLength: helpers.withMessage('Сформулируйте вопрос' , minLength(6))}
    // password: {
    //     required: helpers.withMessage('Confirm password cannot be blank', required),
    //     sameAs: helpers.withMessage("Passwords don't match", sameAs(addQuestionForm.confirm))
    //   }
    }
  })