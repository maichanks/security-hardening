# Security Hardening for OpenClaw

[![OpenClaw Skill](https://img.shields.io/badge/OpenClaw-Skill-ff6b6b)](https://github.com/openclaw/openclaw)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Status](https://img.shields.io/badge/status-Stable-brightgreen)](/LICENSE)

[English](#english) | [中文](#中文)

---

## English

**Status**: Stable | **License**: MIT | **Author**: maichanks

An OpenClaw skill that provides comprehensive security hardening: static scanning, runtime sandbox, audit logging, and Docker hardening.

### Features

- Static analysis (secrets, over-privileged skills)
- Containerized sandbox execution
- Centralized audit logs (JSON)
- Compliance templates (GDPR, SOC2)
- Auto-remediation for common issues
- Seamless OpenClaw Gateway integration

### Quick Start

#### 1. Install to OpenClaw skills

```bash
git clone https://github.com/maichanks/security-hardening.git
# OR copy to $HOME/.openclaw/workspace/skills/
cp -r security-hardening $HOME/.openclaw/workspace/skills/
```

#### 2. Install dependencies

```bash
cd $HOME/.openclaw/workspace/skills/security-hardening
pnpm install   # or: npm install
```

#### 3. Run initial audit (optional)

```bash
node scripts/audit.js --path $HOME/.openclaw/workspace
```

#### 4. Enable runtime protection

Edit your OpenClaw `gateway.yaml`:

```yaml
security:
  enabled: true
  sandbox: docker   # or "bubblewrap" if preferred
```

Then restart Gateway:

```bash
openclaw gateway restart
```

#### 5. (Optional) Add cron for periodic audits

```bash
openclaw cron add \
  --name "Security Audit" \
  --cron "0 3 * * *" \
  --session isolated \
  --message "node $HOME/.openclaw/workspace/skills/security-hardening/scripts/audit.js --path $HOME/.openclaw/workspace"
```

---

## 中文

**状态**: 稳定 | **许可证**: MIT | **作者**: maichanks

OpenClaw skill：全方位安全加固工具，包含静态扫描、运行时沙箱、审计日志、Docker 加固。

### 功能

- 静态分析（检测硬编码密钥、权限过高）
- 容器化沙箱执行
- 集中审计日志（JSON）
- 合规模板（GDPR、SOC2）
- 常见问题自动修复
- 与 OpenClaw Gateway 无缝集成

### 快速开始

#### 1. 安装到 OpenClaw skills

```bash
git clone https://github.com/maichanks/security-hardening.git
# 或复制到 $HOME/.openclaw/workspace/skills/
cp -r security-hardening $HOME/.openclaw/workspace/skills/
```

#### 2. 安装依赖

```bash
cd $HOME/.openclaw/workspace/skills/security-hardening
pnpm install   # 或：npm install
```

#### 3. 运行首次审计（可选）

```bash
node scripts/audit.js --path $HOME/.openclaw/workspace
```

#### 4. 启用运行时保护

编辑 OpenClaw `gateway.yaml`：

```yaml
security:
  enabled: true
  sandbox: docker   # 或 "bubblewrap"
```

重启 Gateway：

```bash
openclaw gateway restart
```

#### 5. （可选）添加定时审计任务

```bash
openclaw cron add \
  --name "Security Audit" \
  --cron "0 3 * * *" \
  --session isolated \
  --message "node $HOME/.openclaw/workspace/skills/security-hardening/scripts/audit.js --path $HOME/.openclaw/workspace"
```
