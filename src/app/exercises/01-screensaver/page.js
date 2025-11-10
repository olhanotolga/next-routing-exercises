import React from 'react';
import Link from 'next/link';

function ScreenSaverExercise() {
  return <main>
    <p>Pick the color!</p>
    <ul>
      <li>
        <Link href='/exercises/01-screensaver/chartreuse'>chartreuse</Link>
      </li>
      <li>
        <Link href='/exercises/01-screensaver/hotpink'>hotpink</Link>
      </li>
      <li>
        <Link href='/exercises/01-screensaver/cornflowerblue'>cornflowerblue</Link>
      </li>
      <li>
        <Link href='/exercises/01-screensaver/coral'>coral</Link>
      </li>
    </ul>
  </main>;
}

export default ScreenSaverExercise;
