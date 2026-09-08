# How to publish this repo (you do this once)

Git and GitHub CLI were **not installed** on the laptop when this folder was created, so the demo exists locally only:

`C:\Users\Open Laptop\Desktop\MJ Work\campus-talent-ops-suite`

Your live campus folders on the Desktop were not used as the git root and were not edited.

## 1. Install Git for Windows

https://git-scm.com/download/win  
Install with defaults. Close and reopen PowerShell.

```powershell
git --version
```

## 2. Install GitHub CLI and sign in

https://cli.github.com/

```powershell
gh --version
gh auth login
```

Use GitHub.com, HTTPS, and login in the browser.

## 3. Create the public repo and push (from this folder only)

```powershell
cd "C:\Users\Open Laptop\Desktop\MJ Work\campus-talent-ops-suite"
git init -b main
git add .
git status
git commit -m "Add CampusOps public dummy-data portfolio"
gh repo create campus-talent-ops-suite --public --source=. --remote=origin --push
```

Do **not** run these commands inside Campus Tool, Hand Holding, Offer Maker, or any other Desktop project.

## 4. Turn on GitHub Pages

GitHub → the new repo → Settings → Pages → Deploy from branch `main` → folder `/ (root)` → Save.

URL will look like:

`https://YOUR-USERNAME.github.io/campus-talent-ops-suite/`

Paste that URL into the resume and into `README.md`.

## Optional later (you own these)

- 20–30 second screen recording of Offer Maker and Emailer using a **dummy** Excel/CSV only.
- Drop the video on LinkedIn or unlisted YouTube; link it from README. Do not commit letterheads or `email_log.csv`.
