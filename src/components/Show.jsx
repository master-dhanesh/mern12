const Show = (props) => {
    const { tasks, settasks } = props;

    let renderTasks =
        tasks.length > 0 ? (
            tasks.map((t, i) => (
                <li
                    className="w-[25%] list-item px-5 py-3 rounded mb-3 bg-zinc-500"
                    key={t.id}
                >
                    {t.title}
                </li>
            ))
        ) : (
            <h1 className="w-[50%] text-green-400 text-center">
                No Pending Task
            </h1>
        );

    return <ul className="text-white list-item text-xl">{renderTasks}</ul>;
};

export default Show;
