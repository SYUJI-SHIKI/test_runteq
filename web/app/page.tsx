import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          テスト
        </h1>

        <p className={styles.description}>
          テスト結果
        </p>

        <h1>レイです見えてますか？</h1>

        <h1>見えてます！僕のは見えますか？</h1>


        <p>gitは奥が深いね</p>

        <p>develop</p>
        <div className={styles.grid}>
          {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
            <a href="#" className={styles.card} key={index}>
              <h3>{feature} &rarr;</h3>
              <p>Description of {feature.toLowerCase()} goes here.</p>
            </a>
          ))}
        </div>
      </main>

      <h2>いちご狩の鬼ここが更新場所です。</h2>
    </>
  )
}