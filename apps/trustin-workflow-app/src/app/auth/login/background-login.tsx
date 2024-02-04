export function BackgroundLogin() {
  const bgUrl = '/bg/login/001.jpg';

  return (
    <div
      className="w-1/2 rounded-3xl border bg-cover"
      style={{
        backgroundImage: `url('${bgUrl}')`,
      }}></div>
  );
}
