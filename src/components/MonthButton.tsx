import React from 'react'

const buttonStyle: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: 'none',
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: 'capitalize',
}

function nomeMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n)
    const nome = new Intl.DateTimeFormat("pt-BR", { month: 'long' }).format(date)
    return nome;
}

function MonthButton({ n }: { n: number; }) {
    return (
        <button style={buttonStyle}>{nomeMes(n)}</button>
    )
}

export default MonthButton