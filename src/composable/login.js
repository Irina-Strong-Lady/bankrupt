import axios from 'axios'
import { reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { pathURL, secretPhrase } from '../constants'
import { required, helpers, minLength } from '@vuelidate/validators'

export const addLoginForm = reactive({name: '', password: ''})

const rulesLogin = computed(() => {
  return {
  name: {required: helpers.withMessage('Обязательное поле', required), 
          minLength: helpers.withMessage('Введите более 1-ой буквы', minLength(2))},
  password: {required: helpers.withMessage('Обязательное поле', required), 
              minLength: helpers.withMessage('Длина пароля от 6-ти символов', minLength(6)), 
              containsPasswordRequirements: helpers.withMessage(() =>
              `Пароль должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы`,
              (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
              )
            }
  }
})

export const vuelidateLogin = useVuelidate(rulesLogin, addLoginForm)

let users = []

const addLogin = payload => {
  const path = `${pathURL}/login`
  axios
    .post(path, payload, { headers: {secret: secretPhrase} })
    .then((res) => {
      users = res.data.users
      if (users === 'Пользователь не существует')
          { ElMessage({ type: "error", 
          message: users, 
          showClose: true,
          center: true, 
          grouping: true, 
          offset: 20
        }) 
      } else { ElMessage({ type: "success", 
              message: `Добрый день, ${users[0].name}!`, 
              showClose: true, 
              center: true, 
              grouping: true, 
              offset: 20
        })
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

const initForm = () => {
  addLoginForm.name = ""
  addLoginForm.password = ""
}

export const onSubmitLogin = async (event) => {
  event.preventDefault()
  const result = await vuelidateLogin.value.$validate()
  if (result) {
    const payload = {
      name: addLoginForm.name,
      password: addLoginForm.password
    }
    addLogin(payload)
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




