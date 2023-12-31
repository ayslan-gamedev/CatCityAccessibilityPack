module.exports = {
    types: [
        { name: '♿ Acessibilidade', value: ':wheelchair:' },
        { name: '✅ Adicionando um teste', value: ':white_check_mark:' },
        { name: '➕ Adicionando uma dependência', value: ':heavy_plus_sign:' },
        { name: '👌 Alterações de revisão de código', value: ':ok_hand:' },
        { name: '💫 Animações e transições', value: ':dizzy:' },
        { name: '🐛 Bugfix', value: ':bug:' },
        { name: '💡 Comentários', value: ':bulb:' },
        { name: '🎉 Commit inicial', value: ':tada:' },
        { name: '🔧 Configuração', value: ':wrench:' },
        { name: '🚀 Deploy', value: ':rocket:' },
        { name: '📚 Documentação', value: ':books:' },
        { name: '🚧 Em progresso', value: ':construction:' },
        { name: '💄 Estilização de interface', value: ':lipstick:' },
        { name: '🧱 Infraestrutura', value: ':bricks:' },
        { name: '🔜 Lista de ideias (tasks)', value: ':soon:' },
        { name: '🚚 Mover/Renomear', value: ':truck:' },
        { name: '✨ Novo recurso', value: ':sparkles:' },
        { name: '📦 Package.json em JS', value: ':package:' },
        { name: '⚡ Performance', value: ':zap:' },
        { name: '♻️ Refatoração', value: ':recycle:' },
        { name: '🔥 Removendo um arquivo', value: ':fire:' },
        { name: '➖ Removendo uma dependência', value: ':heavy_minus_sign:' },
        { name: '📱 Responsividade', value: ':iphone:' },
        { name: '💥 Revertendo mudanças', value: ':boom:' },
        { name: '🔒️ Segurança', value: ':lock:' },
        { name: '🔍️ SEO', value: ':mag:' },
        { name: '🔖 Tag de versão', value: ':bookmark:' },
        { name: '✔️ Teste de aprovação', value: ':heavy_check_mark:' },
        { name: '🧪 Testes', value: ':test_tube:' },
        { name: '📝 Texto', value: ':pencil:' },
        { name: '🏷️ Tipagem', value: ':label:' },
    ],
    scopes: [
        { value: 'feat', name: 'Novo recurso (feat)' },
        { value: 'fix', name: 'Correção de bugs (fix)' },
        { value: 'docs', name: 'Documentação (docs)' },
        { value: 'test', name: 'Testes (test)' },
        { value: 'build', name: 'Build (build)' },
        { value: 'perf', name: 'Performance (perf)' },
        { value: 'style', name: 'Estilo (style)' },
        { value: 'refactor', name: 'Refatoração (refactor) ' },
        { value: 'chore', name: 'Tarefa de Manutenção (chore) ' },
        { value: 'ci', name: 'Integração Contínua (ci)' }        
    ],
    messages: {
        type: 'Classifique o tipo de mudança:',
        scope: 'Selecione o tipo de mudança:',
        customScope: 'Descreva o escopo (pressione Enter para pular):',
        subject: 'Titulo da mudança:\n',
        body: 'Descrição detalhada (pressione Enter para pular/ Use "|" para quebras de linha):\n',
        footer: 'Liste as issues relacionadas a esse commit (pressione Enter para pular):\n',
        confirmCommit: 'Confirmar commit?',    
    },
    allowCustomScopes: true,
};