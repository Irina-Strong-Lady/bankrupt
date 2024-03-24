import axios from 'axios'
import { reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { pathURL, secretPhrase } from '../constants'
import { required, helpers, minLength, sameAs } from '@vuelidate/validators'

let users = []

export const addRegisterForm = reactive({name: '', phone: '', password: '', confirm: ''})

export const rulesUser = computed(() => {
  return {
  name: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Введите более 1-ой буквы', minLength(2))},
  phone: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Неверный формат номера', minLength(18))}, 
  password: {required: helpers.withMessage('Обязательное поле', required), 
              minLength: helpers.withMessage('Длина пароля от 6-ти символов', minLength(6)), 
              containsPasswordRequirements: helpers.withMessage(() =>
              `Пароль должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы`,
              (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
              )
            },
  confirm: {required: helpers.withMessage('Обязательное поле', required), 
            sameAs: helpers.withMessage("Пароли не совпадают", sameAs(addRegisterForm.password))}
  }
})

export const vuelidateUser = useVuelidate(rulesUser, addRegisterForm)

const addUser = payload => {
  const path = `${pathURL}/register`
  axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then((res) => {
      users = res.data.users
      if (users === 'Заявка направлена администратору')
      ElMessage({ type: "success", 
                  message: users,
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
      if (users === 'Пользователь уже существует') 
      ElMessage({ type: "error", 
                  message: users,
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
    })
    .catch((err) => {
      console.error(err)
      ElMessage({ type: "error", 
                  message: "Произошла неожиданная ошибка! Попробуйте позже.", 
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
    })
}

const initForm = () => {
  addRegisterForm.name = ""
  addRegisterForm.phone = ""
  addRegisterForm.password = ""
  addRegisterForm.confirm = ""
}

export const onSubmitUser = async (event) => {
  event.preventDefault()
  const result = await vuelidateUser.value.$validate()
  if (result) {
  const payload = {
    name: addRegisterForm.name,
    phone: addRegisterForm.phone,
    password: addRegisterForm.password,
  }
    addUser(payload)
    initForm()
  } else {
    ElMessage({ type: "error", 
                  message: "Данные введены некорректно. Проверьте все обязательные поля", 
                  showClose: true, 
                  center: true, 
                  grouping: true, 
                  offset: 20
                })
  }
}

