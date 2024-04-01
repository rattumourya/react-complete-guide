export default function Input({label,textarea,...props}) {

    return <p>
          <label htmlFor="title">{label}</label>
          {textarea ? <textarea {...props} /> : <input {...props} /> }
    </p>
}