
//circle control
const circle = document.getElementById('circle')
const enTitle = document.getElementById('enTitle')
window.addEventListener('mousemove', (e)=>{
    circle.style.top = `${window.scrollY+e.y}px`
    circle.style.left = `${e.x}px`
})
enTitle.addEventListener('mouseover', ()=>{
    circle.style.width = "200px"
    circle.style.height = "200px"
    circle.style.zIndex = "-10"
    enTitle.style.opacity = "0"
})
enTitle.addEventListener('mouseout', ()=>{
    circle.style.width = "10px"
    circle.style.height = "10px"
    enTitle.style.opacity = "1"
    circle.style.zIndex = "10"
})

//audio control
let currentAudio
const audios = document.getElementsByTagName('audio')
for (audio in audios){
    if(audio<audios.length){
        const index = parseInt(audio)
        audios[index].addEventListener('play',()=>{
            if(currentAudio!=null & currentAudio!=index){
                audios[currentAudio].pause()
            }
            currentAudio = index
        })
    }
}

//music list control
function musicList(list, prev, next){
    let currentMusicIndex = 0
    prev.addEventListener('click',()=>{
        console.log('here')
        list[currentMusicIndex].classList.remove('action')
        console.log('here2')
        currentMusicIndex = currentMusicIndex - 1
        if(currentMusicIndex<0){
            currentMusicIndex = list.length-1
        }
        list[currentMusicIndex].classList.add('action')
    })
    next.addEventListener('click',()=>{
        list[currentMusicIndex].classList.remove('action')
        currentMusicIndex = currentMusicIndex + 1
        if(currentMusicIndex>list.length-1){
            currentMusicIndex = 0
        }
        list[currentMusicIndex].classList.add('action')
    })
}

const hotdogListItem = document.querySelectorAll('.hotdogListItem')
const hotdogPrev = document.getElementById('hotdogPrev')
const hotdogNext = document.getElementById('hotdogNext')
musicList(hotdogListItem, hotdogPrev, hotdogNext)

const softlipaListItem = document.querySelectorAll('.softlipaListItem')
const softlipaPrev = document.getElementById('softlipaPrev')
const softlipaNext = document.getElementById('softlipaNext')
musicList(softlipaListItem, softlipaPrev, softlipaNext)

const misskoListItem = document.querySelectorAll('.misskoListItem')
const misskoPrev = document.getElementById('misskoPrev')
const misskoNext = document.getElementById('misskoNext')
musicList(misskoListItem, misskoPrev, misskoNext)

const edwardListItem = document.querySelectorAll('.edwardListItem')
const edwardPrev = document.getElementById('edwardPrev')
const edwardNext = document.getElementById('edwardNext')
musicList(edwardListItem, edwardPrev, edwardNext)

const mj116ListItem = document.querySelectorAll('.mj116ListItem')
const mj116Prev = document.getElementById('mj116Prev')
const mj116Next = document.getElementById('mj116Next')
musicList(mj116ListItem, mj116Prev, mj116Next)


//cd rotate
const audioBox = document.querySelectorAll('.audioBox')
for(audio in audioBox){
    if(audio<audioBox.length){
        const index = parseInt(audio)
        audioBox[index].children[2].addEventListener('play', ()=>{
            audioBox[index].children[0].classList.add('playing')
        })
        audioBox[index].children[2].addEventListener('pause', ()=>{
            audioBox[index].children[0].classList.remove('playing')
        })
    }
}

/* lyric animation */
const lyricList = document.querySelectorAll('.lyric')
for( lyric in lyricList){
    if(lyric<lyricList.length){
        const index = parseInt(lyric)
        lyricList[index].addEventListener('mouseover' ,()=>{
            circle.style.width = "150px"
            circle.style.height = "150px"
            circle.style.zIndex = "-10"
        })
        lyricList[index].addEventListener('mouseout' ,()=>{
            circle.style.width = "10px"
            circle.style.height = "10px"
            circle.style.zIndex = "10"
        })
    }
}