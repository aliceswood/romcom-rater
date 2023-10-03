import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';


export default function Films() {
  return (
    <>
      
       <div className={utilStyles.navigationlinks}>
          <Link href="/" data-testid="homeLink" id="homeLink">← Back to home</Link>
        </div>
    </>
  )

  }
