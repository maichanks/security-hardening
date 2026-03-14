#!/usr/bin/env node
// Security Hardening for OpenClaw - Deploy script
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT = 'security-hardening';
const REPO_URL = 'https://github.com/maichanks/security-hardening.git';
const INSTALL_DIR = path.join(process.env.HOME || '/home/admin', '.openclaw', 'workspace', 'skills', PROJECT);

console.log(`🛡️ Deploying ${PROJECT}...`);

// 1. Clone
if (!fs.existsSync(INSTALL_DIR)) {
  console.log('📥 Cloning repository...');
  execSync(`git clone ${REPO_URL} "${INSTALL_DIR}"`, { stdio: 'inherit' });
} else {
  console.log('✅ Already exists, skipping clone');
}

// 2. Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('pnpm install', { cwd: INSTALL_DIR, stdio: 'inherit' });
} catch (e) {
  console.log('pnpm not found, trying npm...');
  execSync('npm install', { cwd: INSTALL_DIR, stdio: 'inherit' });
}

// 3. Done
console.log('\n✅ Deployment complete!');
console.log('\n📝 Next steps:');
console.log(`   1. Run initial audit: node ${path.join(INSTALL_DIR, 'scripts/audit.js')} --path $HOME/.openclaw/workspace`);
console.log('   2. Enable runtime protection in gateway.yaml:');
console.log('      security:');
console.log('        enabled: true');
console.log('        sandbox: docker');
console.log('   3. Restart OpenClaw: openclaw gateway restart');
console.log('   4. (Optional) Add cron for periodic audits:');
console.log(`      openclaw cron add --name "Security Audit" --cron "0 3 * * *" --session isolated --message "node ${ path.join(INSTALL_DIR, 'scripts/audit.js') } --path $HOME/.openclaw/workspace"`);
