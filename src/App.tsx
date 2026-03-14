import { useState } from 'react'
import { Heart, MessageCircle, MapPin, Star, PawPrint, Search, Filter, Sparkles } from 'lucide-react'
import './index.css'

const pets = [
  {
    id: 1,
    name: 'Luna',
    type: '金毛犬',
    age: '2岁',
    location: '北京·朝阳',
    image: '🐕',
    tags: ['友好', '喜欢散步', '已绝育'],
    bio: '我是一只阳光开朗的大金毛，最喜欢去公园玩飞盘！',
    likes: 128,
    matches: 12
  },
  {
    id: 2,
    name: 'Mochi',
    type: '布偶猫',
    age: '1.5岁',
    location: '上海·徐汇',
    image: '🐱',
    tags: ['安静', '室内猫', '疫苗齐全'],
    bio: '傲娇小公主，喜欢被梳毛和晒太阳~',
    likes: 256,
    matches: 8
  },
  {
    id: 3,
    name: 'Charlie',
    type: '柯基',
    age: '3岁',
    location: '深圳·南山',
    image: '🐕',
    tags: ['活泼', '短腿', '爱吃'],
    bio: '短腿小马达，走路带风，干饭第一名！',
    likes: 189,
    matches: 15
  },
  {
    id: 4,
    name: '雪球',
    type: '萨摩耶',
    age: '2.5岁',
    location: '杭州·西湖',
    image: '🐕',
    tags: ['微笑天使', '粘人', '爱干净'],
    bio: '永远带着微笑，喜欢抱抱和亲亲！',
    likes: 342,
    matches: 23
  },
  {
    id: 5,
    name: '布丁',
    type: '英短',
    age: '4岁',
    location: '成都·锦江',
    image: '🐱',
    tags: ['稳重', '独立', '夜猫子'],
    bio: '成熟大叔型，喜欢深夜巡逻和打盹',
    likes: 167,
    matches: 6
  },
  {
    id: 6,
    name: '豆豆',
    type: '柴犬',
    age: '1岁',
    location: '广州·天河',
    image: '🐕',
    tags: ['倔强', '表情包', '护主'],
    bio: '行走的表情包，性格独立又忠诚！',
    likes: 298,
    matches: 18
  }
]

const features = [
  {
    icon: '🔍',
    title: '智能匹配',
    desc: '基于品种、性格、地理位置的精准推荐'
  },
  {
    icon: '💬',
    title: '即时聊天',
    desc: '与附近的宠友实时交流，约遛弯'
  },
  {
    icon: '📍',
    title: '附近发现',
    desc: '发现周边的宠物友好场所和活动'
  },
  {
    icon: '🏥',
    title: '健康档案',
    desc: '记录疫苗、体检等健康信息'
  }
]

function App() {
  const [likedPets, setLikedPets] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedPets(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paw-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-paw-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-paw-400 to-mint-400 rounded-2xl flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-2xl font-bold gradient-text">PawPal</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-paw-600 font-medium transition-colors">
                发现
              </button>
              <button className="text-gray-600 hover:text-paw-600 font-medium transition-colors">
                匹配
              </button>
              <button className="text-gray-600 hover:text-paw-600 font-medium transition-colors">
                社区
              </button>
              <button className="text-gray-600 hover:text-paw-600 font-medium transition-colors">
                消息
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-paw-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="btn-primary text-sm py-2 px-6">
                登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-paw-100 via-white to-mint-50 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md mb-8 animate-float">
              <Sparkles className="w-4 h-4 text-paw-500" />
              <span className="text-sm font-medium text-gray-700">已帮助 50,000+ 宠物找到玩伴</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              让毛孩子
              <span className="gradient-text block mt-2">不再孤单</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              PawPal 是专为宠物打造的社交平台。发现附近的宠友，找到完美的玩伴，
              让你的爱宠拥有快乐充实的社交生活。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">
                开始探索
              </button>
              <button className="btn-secondary text-lg flex items-center justify-center gap-2">
                <span>了解更多</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-paw-600">50K+</div>
                <div className="text-gray-500 text-sm">活跃宠物</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mint-500">12K+</div>
                <div className="text-gray-500 text-sm">成功配对</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-paw-600">200+</div>
                <div className="text-gray-500 text-sm">城市覆盖</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce-slow">🐕</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce-slow" style={{animationDelay: '0.5s'}}>🐱</div>
        <div className="absolute top-40 right-20 text-4xl opacity-15 animate-float">🦴</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              为什么选择 <span className="gradient-text">PawPal</span>
            </h2>
            <p className="text-gray-600 text-lg">为宠物和主人打造的全方位社交体验</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Cards Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-2">
                发现可爱的TA
              </h2>
              <p className="text-gray-600">看看附近有哪些宠物在寻找玩伴</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">筛选</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-paw-500 text-white rounded-full hover:bg-paw-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">附近</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet) => (
              <div key={pet.id} className="card">
                {/* Pet Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-paw-100 to-mint-100 flex items-center justify-center relative">
                  <span className="text-8xl">{pet.image}</span>
                  <button 
                    onClick={() => toggleLike(pet.id)}
                    className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${likedPets.includes(pet.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-paw-500" />
                    <span className="text-xs font-medium text-gray-700">{pet.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-gray-900">{pet.name}</h3>
                      <p className="text-gray-500 text-sm">{pet.type} · {pet.age}</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{pet.matches}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pet.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pet.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-paw-50 text-paw-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {pet.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {pet.matches}
                      </span>
                    </div>
                    <button className="p-2 bg-paw-500 text-white rounded-full hover:bg-paw-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              查看更多宠物
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-paw-500 to-mint-500 rounded-3xl p-12 text-center text-white">
            <h2 className="font-display text-4xl font-bold mb-4">
              准备好让毛孩子交朋友了吗？
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              加入 PawPal 社区，发现附近的宠友，参与线下聚会，让你的爱宠拥有快乐的社交生活。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-paw-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-lg">
                免费注册
              </button>
              <button className="bg-paw-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-paw-700 transition-colors border-2 border-white/30">
                下载 App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-paw-400 to-mint-400 rounded-2xl flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <span className="font-display text-2xl font-bold text-white">PawPal</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                让每一只宠物都能找到属于自己的快乐玩伴。
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">发现宠物</a></li>
                <li><a href="#" className="hover:text-white transition-colors">匹配系统</a></li>
                <li><a href="#" className="hover:text-white transition-colors">社区活动</a></li>
                <li><a href="#" className="hover:text-white transition-colors">健康档案</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
                <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">媒体合作</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-paw-500 transition-colors">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-paw-500 transition-colors">
                  <span className="text-lg">💬</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-paw-500 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 PawPal. 让每一个毛孩子都不再孤单。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
