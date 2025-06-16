import React from "react";

export default function TeamSection() {
  return (
    <div style={styles.container}>
      <div style={styles.arrowGroup}>
        <div style={styles.arrow}>{'>>>'}</div>
      </div>

      <div style={styles.circle}>
        <div style={styles.moon}>🌙</div>
      </div>
      <div style={styles.arrowGroup}>
        <div style={styles.arrow}>{'<<<'}</div>
      </div>
    </div>
  );
}