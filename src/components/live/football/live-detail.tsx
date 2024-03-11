interface ILiveDetailProps {
  ref: React.LegacyRef<HTMLDivElement> | undefined;
}

const LiveDetail: React.FunctionComponent<ILiveDetailProps> = ({ ref }) => {
  return (
    <div ref={ref} className="h-96 bg-red-500">
      키키키
    </div>
  );
};

export default LiveDetail;
