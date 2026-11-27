# Frontend_Pambalatech

Elaboração da estrutura visual do PambalaTech um e-commerce focado na venda de electrônicos de segunda mão. 

# Pambalatech — Requisitos do Sistema

# 1. Módulos e Requisitos Funcionais (RF)

## Módulo 1: Gestão de Identidade, Autenticação e Perfil

| Código | Requisito | Descrição |
|---|---|---|
| **RF01** | Cadastro via Telemóvel/Express | Permitir cadastro e acesso com verificação OTP (SMS ou integração Multicaixa Express). |
| **RF02** | KYC e Validação de BI | Permitir submissão de imagem de Bilhete de Identidade (BI) e verificação do NIF/Número do BI para validação de identidade do vendedor. |
| **RF03** | Gestão de Reputação | Calcular e exibir a pontuação do vendedor/comprador com base no histórico de vendas, avaliações e disputas. |

## Módulo 2: Gestão de Catálogo e Anúncios Guiados

| Código | Requisito | Descrição |
|---|---|---|
| **RF04** | Anúncio Guiado por Categorias | Forçar o preenchimento de formulários dinâmicos de acordo com a categoria selecionada (Smartphone vs. Computador). |
| **RF05** | Captura de IMEI/Serial Number | Exigir validação de formato de IMEI (15 dígitos) ou Número de Série antes de publicar. |
| **RF06** | Classificação Estética (Gradação) | Oferecer campo obrigatório de seleção para Grade A, B ou C, com descrições normatizadas. |
| **RF07** | Upload e Validação de Imagens | Permitir carregamento de fotos com limite mínimo/máximo e obrigatoriedade de fotos específicas (ecrã ligado com definições/IMEI visível). |

## Módulo 3: Motor de Vendas (Venda Direta e Leilão)

| Código | Requisito | Descrição |
|---|---|---|
| **RF08** | Compra Imediata | Permitir a compra de itens no modelo de preço fixo ("Comprar Agora"). |
| **RF09** | Motor de Leilões | Permitir criação de leilões com preço inicial, incremento mínimo e preço de reserva.<br>Executar sistema de licitações em tempo real (WebSockets).<br>Enviar notificações instantâneas ao utilizador quando for superado num lance (Outbid notification). |

## Módulo 4: Gestão de Pagamentos e Custódia (Escrow)

| Código | Requisito | Descrição |
|---|---|---|
| **RF10** | Integração com Multicaixa Express / GPO | Gerar referências de pagamento (ou pedidos push Express) para liquidação. |
| **RF11** | Módulo de Escrow (Carteira de Custódia) | - Registrar a entrada do valor total do pagamento numa conta transitória de custódia.<br>- Congelar os fundos e alterar o estado do pedido para "Pagamento Retido em Custódia". |
| **RF12** | Checkout e Cálculo de Taxas | Calcular automaticamente o valor líquido do vendedor subtraindo a comissão do Pambalatech e taxas de verificação/transporte. |
| **RF13** | Liquidação (Payout) | Executar a transferência dos fundos para o vendedor (via transferência IBAN ou Multicaixa Express) após a aprovação ou decurso do prazo de 48h. |

## Módulo 5: Gestão Logística e Hub de Inspeção

| Código | Requisito | Descrição |
|---|---|---|
| **RF14** | Opção de Entrega (Hub vs. Direta) | Permitir escolha da modalidade logística na finalização do pedido. |
| **RF15** | Painel Técnico do Hub Pambalatech (App/Painel Interno) | - Permitir à equipa técnica ler o IMEI/Serial via código de barras/QR code ao receber o equipamento no Hub.<br>- Preencher checklist de verificação técnica digital (Touch, Bateria, Wi-Fi, Carregamento, Câmera).<br>- Gerar "Selo Digital de Garantia Pambalatech" após aprovação do teste. |
| **RF16** | Rastreio de Expedição | Atualizar o estado da encomenda (Aguardando Envio -> Recebido no Hub -> Em Inspeção -> Aprovado e Selado -> Em Trânsito -> Entregue). |

## Módulo 6: Gestão de Disputas e Devoluções

| Código | Requisito | Descrição |
|---|---|---|
| **RF17** | Abertura de Disputa | Permitir ao comprador abrir um pedido de contestação dentro da janela de 48h, anexando descrição, fotos e vídeos. |
| **RF18** | Bloqueio Cautelar do Escrow | Pausar a contagem regressiva de libertação do pagamento automaticamente ao abrir uma disputa. |
| **RF19** | Painel de Mediação (Backoffice Admin) | Permitir à equipa de suporte do Pambalatech revisar provas, solicitar envio do item para o Hub central para perícia e tomar a decisão de reembolso ou libertação do pagamento. |
| **RF20** | Processamento de Reembolso (Refund) | Executar a devolução total/parcial do valor ao comprador em caso de disputa ganha. |

---

# 2. Requisitos Não-Funcionais (RNF)

| Código | Categoria | Requisito Não-Funcional |
|---|---|---|
| **RNF01** | Segurança | **Proteção de Dados:** Criptografia de dados sensíveis em trânsito (HTTPS/TLS 1.3) e em repouso (AES-256). |
| **RNF02** | Segurança | **Prevenção contra Fraude:** Validação de IMEI contra bases de dados de dispositivos roubados/bloqueados (se aplicável via API local/internacional). |
| **RNF03** | Desempenho | **Tempo de Resposta:** Atualização de lances de leilão em tempo real com latência inferior a 500ms via WebSockets. |
| **RNF04** | Disponibilidade | **Uptime:** Garantir disponibilidade do sistema de 99.5%, especialmente em períodos de encerramento de leilões. |
| **RNF05** | Usabilidade | **PWA e Mobile First:** A interface do utilizador deve ser totalmente otimizada para dispositivos móveis com baixo consumo de dados móveis. |
| **RNF06** | Auditabilidade | **Logs de Custódia:** Todos os eventos financeiros e alteração de estado do dinheiro (retido, liberado, reembolsado) devem gerar rastros auditáveis imutáveis no banco de dados. |

---

# 3. Critérios de Aceitação (CA)

Os critérios de aceitação definem as condições mínimas indispensáveis para que as funcionalidades sejam consideradas concluídas, validadas e prontas para ambiente de produção.

## 3.1. Critérios de Funcionalidade e Operação

### CA-FO-01 (Validação de Identidade e Antifraude)

- O cadastro de vendedor só é ativado após a validação do número de telemóvel via código OTP e submissão do número do Bilhete de Identidade (BI).
- O sistema deve rejeitar o cadastro de anúncios cujo IMEI (15 dígitos) ou Número de Série já esteja associado a outro anúncio ativo na plataforma.

### CA-FO-02 (Operação de Custódia / Escrow)

- Após o comprador efetuar o pagamento via Multicaixa Express / Referência MCX, o estado do dinheiro deve mudar instantaneamente para Em Custódia e o produto para Reservado.
- Em nenhuma hipótese o valor cobrado pode ser transferido diretamente para a conta do vendedor antes da confirmação explícita do comprador ou do esgotamento do prazo de janela de proteção de 48 horas.

### CA-FO-03 (Motor de Leilão em Tempo Real)

- Lances efetuados nos últimos 2 minutos do leilão devem estender o contador em +3 minutos automaticamente (regra anti-sniping).
- Se o leilão atingir o horário de encerramento sem atingir o Preço de Reserva configurado pelo vendedor, o sistema deve marcar o leilão como Não Arrematado e não gerar cobrança ao maior licitante.

### CA-FO-04 (Checklist Técnico do Hub)

- A aprovação do equipamento no Ponto de Verificação Pambalatech requer obrigatoriamente a validação positiva de 100% dos itens do checklist técnico digital (Ecrã/Touch, IMEI/Serial, Câmeras, Bateria, Conectividade).
- A reprovação em qualquer item obriga o sistema a emitir uma notificação imediata de cancelamento com relatório anexado e iniciar a devolução.

### CA-FO-05 (Abertura e Bloqueio de Disputas)

- A abertura de uma disputa dentro da janela de 48h congela imediatamente a contagem regressiva de liberação do pagamento até a deliberação do administrador no Backoffice.
