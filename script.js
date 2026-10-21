document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');

  if (!input || !output || !terminalBody) return;

  const commands = {
    help: 'Доступные команды: <span class="text-emerald-400">whoami</span>, <span class="text-emerald-400">stack</span>, <span class="text-emerald-400">projects</span>, <span class="text-emerald-400">contact</span>, <span class="text-emerald-400">clear</span>',
    whoami: 'SocietyQwer — Системный администратор и сетевой инженер.',
    stack: 'Сети: MikroTik, OpenWrt, D-Link CLI, VLANs.\nСервера: Windows Server AD DC, GPO, DNS, RDS CAL.\nСкрипты/Веб: Python, Bash, React, Vite.',
    projects: '1. DIY OR CRY (https://societyqwer.github.io/DiyOrCry/)\n2. AD DC & VLAN Infrastructure\n3. OpenWrt Cudy TR3000 Routing\n4. Банкетам.Нет',
    contact: 'Telegram: https://t.me/FsocietyLoveParanoia\nGitHub: https://github.com/societyqwer'
  };

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';

      const line = document.createElement('div');
      line.className = 'mb-2';
      line.innerHTML = `<span class="text-emerald-400 font-bold">sysadmin@fsociety:~$</span> <span>${cmd}</span>`;
      output.appendChild(line);

      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      const res = document.createElement('div');
      res.className = 'text-slate-300 whitespace-pre-line mb-3 pl-4 border-l-2 border-emerald-500/40';
      
      if (commands[cmd]) {
        res.innerHTML = commands[cmd];
      } else if (cmd !== '') {
        res.innerHTML = `Команда не найдена: ${cmd}. Введите <span class="text-emerald-400">help</span>`;
      }
      
      output.appendChild(res);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
});