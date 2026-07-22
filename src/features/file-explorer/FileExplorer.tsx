const FileExplorer = ({ node }) => {
    return (
        <div style={{ paddingLeft: "20px" }}>
            <div>
                {node.type === "folder" ? "📁" : "📄"} {node.name}
            </div>

            {node.type === "folder" &&
                node.children.map((child) => (
                    <FileExplorer key={child.id} node={child} />
                ))}
        </div>
    );
};
export default FileExplorer