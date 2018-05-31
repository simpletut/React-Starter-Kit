
export const validate_contactForm = values => {
    
    const errors = {}
    
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'message'
    ]
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
  
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
  
    return errors;
    
  }
  