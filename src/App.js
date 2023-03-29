function App() {
  return (
    // Container
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        {/* Header Contents */}
        <div className="bg-yellow-100 max-w-screen-xl mx-auto h-full flex justify-between items-center px-2 md:px-8">
          <div>
            {/* Logo - 이미지로 교체가능 */}
            <div>h662's Portfolio</div>
          </div>
          <ul className="flex text-xs md:text-base gap-2 md:gap-8">
            <li>Introduce</li>
            <li>Protfolio</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적습니다.
        </div>
      </main>
    </div>
  );
}

export default App;
