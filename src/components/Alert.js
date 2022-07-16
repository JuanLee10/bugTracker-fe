/** Render Alert
 *
 * Prop:
 * - msgs: Array of messages to display
 * - type: bootstrap alert type
 * (https://getbootstrap.com/docs/4.6/components/alerts/)
 */

 function Alert({ msgs, type = "danger" }) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {msgs.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>
    );
  }
  
  export default Alert;