# Security Hardening for OpenClaw

[English](#english) | [中文](#中文)

---

## English

**Status**: Stable | **License**: MIT | **Author**: maichanks

Comprehensive security toolkit: static scanning, runtime sandbox, audit logging, and Docker hardening.

### Features

- Static analysis (secrets, over-privileged skills)
- Containerized sandbox execution
- Centralized audit logs (JSON)
- Compliance templates (GDPR, SOC2)
- Auto-remediation for common issues

### Quick Start

```bash
git clone https://github.com/maichanks/security-hardening.git
cd security-hardening
pnpm install

# One-time audit
node scripts/audit.js --path ~/.openclaw/workspace

# Enable runtime protection in gateway.yaml
# security:
#   enabled: true
#   sandbox: docker
openclaw gateway restart
```

---

## 中文

**状态**: 稳定 | **许可证**: MIT | **作者**: maichanks

全方位安全加固工具：静态扫描、运行时沙箱、审计日志、Docker 加固。

### 功能

- 静态分析（检测硬编码密钥、权限过高）
- 容器化沙箱执行
- 集中审计日志（JSON）
- 合规模板（GDPR、SOC2）
- 常见问题自动修复

### 快速开始

```bash
git clone https://github.com/maichanks/security-hardening.git
cd security-hardening
pnpm install

# 一次性审计
node scripts/audit.js --path ~/.openclaw/workspace

# 在 gateway.yaml 启用运行时保护
# security:
#   enabled: true
#   sandbox: docker
openclaw gateway restart
```
